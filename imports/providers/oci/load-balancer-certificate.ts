// https://www.terraform.io/docs/providers/oci/r/load_balancer_certificate.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "ca_certificate": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "certificate_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "load_balancer_id": {
        "type": "string",
        "required": true
      },
      "passphrase": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "private_key": {
        "type": "string",
        "optional": true,
        "computed": true,
        "sensitive": true
      },
      "public_certificate": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LoadBalancerCertificateConfig extends TerraformMetaArguments {
  readonly caCertificate?: string;
  readonly certificateName: string;
  readonly loadBalancerId: string;
  readonly passphrase?: string;
  readonly privateKey?: string;
  readonly publicCertificate?: string;
  /** timeouts block */
  readonly timeouts?: LoadBalancerCertificateTimeouts;
}
export interface LoadBalancerCertificateTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class LoadBalancerCertificate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoadBalancerCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_certificate',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._caCertificate = config.caCertificate;
    this._certificateName = config.certificateName;
    this._loadBalancerId = config.loadBalancerId;
    this._passphrase = config.passphrase;
    this._privateKey = config.privateKey;
    this._publicCertificate = config.publicCertificate;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string;
  public get caCertificate() {
    return this._caCertificate ?? this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string | undefined) {
    this._caCertificate = value;
  }

  // certificate_name - computed: false, optional: false, required: true
  private _certificateName: string;
  public get certificateName() {
    return this._certificateName;
  }
  public set certificateName(value: string) {
    this._certificateName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId: string;
  public get loadBalancerId() {
    return this._loadBalancerId;
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string;
  public get passphrase() {
    return this._passphrase;
  }
  public set passphrase(value: string | undefined) {
    this._passphrase = value;
  }

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string;
  public get privateKey() {
    return this._privateKey ?? this.getStringAttribute('private_key');
  }
  public set privateKey(value: string | undefined) {
    this._privateKey = value;
  }

  // public_certificate - computed: true, optional: true, required: false
  private _publicCertificate?: string;
  public get publicCertificate() {
    return this._publicCertificate ?? this.getStringAttribute('public_certificate');
  }
  public set publicCertificate(value: string | undefined) {
    this._publicCertificate = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LoadBalancerCertificateTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LoadBalancerCertificateTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_certificate: this._caCertificate,
      certificate_name: this._certificateName,
      load_balancer_id: this._loadBalancerId,
      passphrase: this._passphrase,
      private_key: this._privateKey,
      public_certificate: this._publicCertificate,
      timeouts: this._timeouts,
    };
  }
}
