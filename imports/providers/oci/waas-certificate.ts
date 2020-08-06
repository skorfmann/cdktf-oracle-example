// https://www.terraform.io/docs/providers/oci/r/waas_certificate.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "certificate_data": {
        "type": "string",
        "required": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "extensions": {
        "type": [
          "list",
          [
            "object",
            {
              "is_critical": "bool",
              "name": "string",
              "value": "string"
            }
          ]
        ],
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_trust_verification_disabled": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "issued_by": {
        "type": "string",
        "computed": true
      },
      "issuer_name": {
        "type": [
          "list",
          [
            "object",
            {
              "common_name": "string",
              "country": "string",
              "email_address": "string",
              "locality": "string",
              "organization": "string",
              "organizational_unit": "string",
              "state_province": "string"
            }
          ]
        ],
        "computed": true
      },
      "private_key_data": {
        "type": "string",
        "required": true,
        "sensitive": true
      },
      "public_key_info": {
        "type": [
          "list",
          [
            "object",
            {
              "algorithm": "string",
              "exponent": "number",
              "key_size": "number"
            }
          ]
        ],
        "computed": true
      },
      "serial_number": {
        "type": "string",
        "computed": true
      },
      "signature_algorithm": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "subject_name": {
        "type": [
          "list",
          [
            "object",
            {
              "common_name": "string",
              "country": "string",
              "email_address": "string",
              "locality": "string",
              "organization": "string",
              "organizational_unit": "string",
              "state_province": "string"
            }
          ]
        ],
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_not_valid_after": {
        "type": "string",
        "computed": true
      },
      "time_not_valid_before": {
        "type": "string",
        "computed": true
      },
      "version": {
        "type": "number",
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface WaasCertificateConfig extends TerraformMetaArguments {
  readonly certificateData: string;
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly isTrustVerificationDisabled?: boolean;
  readonly privateKeyData: string;
  /** timeouts block */
  readonly timeouts?: WaasCertificateTimeouts;
}
export class WaasCertificateExtensions extends ComplexComputedList {

  // is_critical - computed: true, optional: false, required: true
  public get isCritical() {
    return this.getBooleanAttribute('is_critical');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class WaasCertificateIssuerName extends ComplexComputedList {

  // common_name - computed: true, optional: false, required: true
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // country - computed: true, optional: false, required: true
  public get country() {
    return this.getStringAttribute('country');
  }

  // email_address - computed: true, optional: false, required: true
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // locality - computed: true, optional: false, required: true
  public get locality() {
    return this.getStringAttribute('locality');
  }

  // organization - computed: true, optional: false, required: true
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // organizational_unit - computed: true, optional: false, required: true
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }

  // state_province - computed: true, optional: false, required: true
  public get stateProvince() {
    return this.getStringAttribute('state_province');
  }
}
export class WaasCertificatePublicKeyInfo extends ComplexComputedList {

  // algorithm - computed: true, optional: false, required: true
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // exponent - computed: true, optional: false, required: true
  public get exponent() {
    return this.getNumberAttribute('exponent');
  }

  // key_size - computed: true, optional: false, required: true
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
}
export class WaasCertificateSubjectName extends ComplexComputedList {

  // common_name - computed: true, optional: false, required: true
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // country - computed: true, optional: false, required: true
  public get country() {
    return this.getStringAttribute('country');
  }

  // email_address - computed: true, optional: false, required: true
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // locality - computed: true, optional: false, required: true
  public get locality() {
    return this.getStringAttribute('locality');
  }

  // organization - computed: true, optional: false, required: true
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // organizational_unit - computed: true, optional: false, required: true
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }

  // state_province - computed: true, optional: false, required: true
  public get stateProvince() {
    return this.getStringAttribute('state_province');
  }
}
export interface WaasCertificateTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class WaasCertificate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WaasCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waas_certificate',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateData = config.certificateData;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._isTrustVerificationDisabled = config.isTrustVerificationDisabled;
    this._privateKeyData = config.privateKeyData;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_data - computed: false, optional: false, required: true
  private _certificateData: string;
  public get certificateData() {
    return this._certificateData;
  }
  public set certificateData(value: string) {
    this._certificateData = value;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // extensions - computed: true, optional: false, required: true
  public extensions(index: string) {
    return new WaasCertificateExtensions(this, 'extensions', index);
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_trust_verification_disabled - computed: true, optional: true, required: false
  private _isTrustVerificationDisabled?: boolean;
  public get isTrustVerificationDisabled() {
    return this._isTrustVerificationDisabled ?? this.getBooleanAttribute('is_trust_verification_disabled');
  }
  public set isTrustVerificationDisabled(value: boolean | undefined) {
    this._isTrustVerificationDisabled = value;
  }

  // issued_by - computed: true, optional: false, required: true
  public get issuedBy() {
    return this.getStringAttribute('issued_by');
  }

  // issuer_name - computed: true, optional: false, required: true
  public issuerName(index: string) {
    return new WaasCertificateIssuerName(this, 'issuer_name', index);
  }

  // private_key_data - computed: false, optional: false, required: true
  private _privateKeyData: string;
  public get privateKeyData() {
    return this._privateKeyData;
  }
  public set privateKeyData(value: string) {
    this._privateKeyData = value;
  }

  // public_key_info - computed: true, optional: false, required: true
  public publicKeyInfo(index: string) {
    return new WaasCertificatePublicKeyInfo(this, 'public_key_info', index);
  }

  // serial_number - computed: true, optional: false, required: true
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // signature_algorithm - computed: true, optional: false, required: true
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subject_name - computed: true, optional: false, required: true
  public subjectName(index: string) {
    return new WaasCertificateSubjectName(this, 'subject_name', index);
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_not_valid_after - computed: true, optional: false, required: true
  public get timeNotValidAfter() {
    return this.getStringAttribute('time_not_valid_after');
  }

  // time_not_valid_before - computed: true, optional: false, required: true
  public get timeNotValidBefore() {
    return this.getStringAttribute('time_not_valid_before');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getNumberAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: WaasCertificateTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: WaasCertificateTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_data: this._certificateData,
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      is_trust_verification_disabled: this._isTrustVerificationDisabled,
      private_key_data: this._privateKeyData,
      timeouts: this._timeouts,
    };
  }
}
