// https://www.terraform.io/docs/providers/oci/r/data_oci_load_balancer_certificates.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "certificates": {
        "type": [
          "list",
          [
            "object",
            {
              "ca_certificate": "string",
              "certificate_name": "string",
              "load_balancer_id": "string",
              "passphrase": "string",
              "private_key": "string",
              "public_certificate": "string",
              "state": "string"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "load_balancer_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciLoadBalancerCertificatesConfig extends TerraformMetaArguments {
  readonly loadBalancerId: string;
  /** filter block */
  readonly filter?: DataOciLoadBalancerCertificatesFilter[];
}
export class DataOciLoadBalancerCertificatesCertificates extends ComplexComputedList {

  // ca_certificate - computed: true, optional: false, required: true
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }

  // certificate_name - computed: true, optional: false, required: true
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }

  // load_balancer_id - computed: true, optional: false, required: true
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // passphrase - computed: true, optional: false, required: true
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // private_key - computed: true, optional: false, required: true
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // public_certificate - computed: true, optional: false, required: true
  public get publicCertificate() {
    return this.getStringAttribute('public_certificate');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataOciLoadBalancerCertificatesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciLoadBalancerCertificates extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciLoadBalancerCertificatesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_certificates',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._loadBalancerId = config.loadBalancerId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificates - computed: true, optional: false, required: true
  public certificates(index: string) {
    return new DataOciLoadBalancerCertificatesCertificates(this, 'certificates', index);
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciLoadBalancerCertificatesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciLoadBalancerCertificatesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      load_balancer_id: this._loadBalancerId,
      filter: this._filter,
    };
  }
}
