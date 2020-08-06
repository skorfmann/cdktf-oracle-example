// https://www.terraform.io/docs/providers/oci/r/data_oci_waas_certificate.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "certificate_data": {
        "type": "string",
        "computed": true
      },
      "certificate_id": {
        "type": "string",
        "required": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "display_name": {
        "type": "string",
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
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "is_trust_verification_disabled": {
        "type": "bool",
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
        "computed": true,
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
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciWaasCertificateConfig extends TerraformMetaArguments {
  readonly certificateId: string;
}
export class DataOciWaasCertificateExtensions extends ComplexComputedList {

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
export class DataOciWaasCertificateIssuerName extends ComplexComputedList {

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
export class DataOciWaasCertificatePublicKeyInfo extends ComplexComputedList {

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
export class DataOciWaasCertificateSubjectName extends ComplexComputedList {

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

// Resource

export class DataOciWaasCertificate extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciWaasCertificateConfig) {
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
    this._certificateId = config.certificateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_data - computed: true, optional: false, required: true
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }

  // certificate_id - computed: false, optional: false, required: true
  private _certificateId: string;
  public get certificateId() {
    return this._certificateId;
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // extensions - computed: true, optional: false, required: true
  public extensions(index: string) {
    return new DataOciWaasCertificateExtensions(this, 'extensions', index);
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_trust_verification_disabled - computed: true, optional: false, required: true
  public get isTrustVerificationDisabled() {
    return this.getBooleanAttribute('is_trust_verification_disabled');
  }

  // issued_by - computed: true, optional: false, required: true
  public get issuedBy() {
    return this.getStringAttribute('issued_by');
  }

  // issuer_name - computed: true, optional: false, required: true
  public issuerName(index: string) {
    return new DataOciWaasCertificateIssuerName(this, 'issuer_name', index);
  }

  // private_key_data - computed: true, optional: false, required: true
  public get privateKeyData() {
    return this.getStringAttribute('private_key_data');
  }

  // public_key_info - computed: true, optional: false, required: true
  public publicKeyInfo(index: string) {
    return new DataOciWaasCertificatePublicKeyInfo(this, 'public_key_info', index);
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
    return new DataOciWaasCertificateSubjectName(this, 'subject_name', index);
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: this._certificateId,
    };
  }
}
